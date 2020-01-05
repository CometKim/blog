import inquirer from 'inquirer';
import fs from 'mz/fs';
import path from 'path';
import { format } from 'date-fns';

const template = `
---
title: $TITLE$
date: $DATE$
slug: $SLUG$
---

내용을 입력하세요.
`;

(async () => {
  const { title, slug } = await inquirer.prompt([
    { name: 'title', message: '포스트 제목을 입력하세요:', type: 'input' },
    {
      name: 'slug',
      message: '주소를 입력 해 주세요:',
      type: 'input',
      filter: (value: string) => (value.startsWith('/') ? value : '/' + value),
    },
  ]);

  const now = new Date();
  const formattedNow = format(now, 'yyyy-MM-dd');
  const folderName = formattedNow + '-' + title.replace(/\s/g, '-');
  const folderPath = path.join(__dirname, '../../posts', folderName);
  const filePath = path.join(folderPath, 'index.md');

  await fs.mkdir(folderPath);

  const data = [
    '---',
    `title: ${title}`,
    `date: ${now.toISOString()}`,
    `slug: ${slug}`,
    'tags: []',
    'type: post',
    'thumbnail: thumbnail.png',
    '---',
    '',
    '내용'
  ].join('\n');

  await fs.writeFile(filePath, data, {
    encoding: 'utf8',
  });
})();
