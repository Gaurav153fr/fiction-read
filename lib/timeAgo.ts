import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function timeAgo(time: string) {        

    return dayjs(time).fromNow();
}