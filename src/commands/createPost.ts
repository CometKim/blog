import inquirer from 'inquirer';
import fs from 'mz/fs';
import path from 'path';
import { DateTime } from 'luxon';

const template = `
---
title: $TITLE$
date: $DATE$
path: $PATH$
---

내용을 입력하세요.
`;

(async () => {
    const { title, path: _path } = await inquirer.prompt([
        { name: 'title', message: '포스트 제목을 입력하세요:', type: 'input' },
        {
            name: 'path',
            message: '주소를 입력 해 주세요:',
            type: 'input',
            filter: (value: string) => (value.startsWith('/') ? value : '/' + value),
        },
    ]);

    const folderPath = path.join(__dirname, '../../posts', title);
    const filePath = path.join(folderPath, `${title}.md`);

    await fs.mkdir(folderPath);

    const data = template
        .replace('$TITLE$', title)
        .replace('$DATE$', DateTime.local().toISO())
        .replace('$PATH$', _path)
        .trim();

    await fs.writeFile(filePath, data, {
        encoding: 'utf8',
    });
})();
