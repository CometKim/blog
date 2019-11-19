import { format, formatDistanceToNow } from 'date-fns';
import { parseISO } from 'date-fns/fp';
import ko from 'date-fns/locale/ko';
import * as R from 'remeda';

const formatDatetime = (date: string): string => {
    return R.pipe(
        date,
        parseISO,
        date => {
            return formatDistanceToNow(date, {
                locale: ko,
                addSuffix: true,
            });
        },
    );
};

export default formatDatetime;
