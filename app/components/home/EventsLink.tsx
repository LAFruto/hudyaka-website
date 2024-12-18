import { Link } from "@remix-run/react";
import { cn } from "~/lib/util";
import Arrow from "../icons/Arrow";
import Festival from "../icons/Festival";

interface EventsLinkProps {
  className?: string;
}

const EventsLink = ({ className }: EventsLinkProps) => {
  return (
    <Link
      to="/#events"
      prefetch="viewport"
      className={cn(
        "flex flex-col justify-between gap-8 rounded-3xl bg-yellow-500 p-6 group cursor-pointer transition-all hover:opacity-90",
        className
      )}
    >
      <span className="flex-shrink-0 max-w-[100px] p-3 rounded-2xl bg-white">
        <Festival color="yellow" />
      </span>
      <div className="flex text-white items-end justify-between">
        <div className="flex flex-col leading-tight">
          <div className="h-8 md:h-11 overflow-hidden">
            <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
              <p className="text-2xl md:text-4xl font-bold h-8 md:h-11">
                Events
              </p>
              <p className="text-2xl md:text-4xl font-bold h-8 md:h-11">
                Events
              </p>
            </div>
          </div>
          <p className="text-xs md:text-base text-nowrap">
            View Events results!
          </p>
        </div>
        <span className="w-[30px] h-[30px] mb-1">
          <Arrow className="group-hover:translate-y-1 group-hover:translate-x-1 transition-all" />
        </span>
      </div>
    </Link>
  );
};

export default EventsLink;
