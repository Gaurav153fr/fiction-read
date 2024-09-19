import timeAgo from "@/lib/timeAgo";

const DaysAgo = ({ time }: { time: string }) => {
  return (
    <div>
      <span className="line-clamp-1 text-[.7rem] text-muted-foreground">
        {timeAgo(time)}
      </span>
    </div>
  );
};

export default DaysAgo;
