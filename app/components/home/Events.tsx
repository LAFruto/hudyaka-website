import { Link } from "@remix-run/react";
import { useCurrentTime } from "~/hooks/useCurrentTime";
import { cn, getEventStatus } from "~/lib/util";
import { ActivityRecord } from "../../types";
import { CountdownTimer } from "../CountdownTimer";
import HoverMedal from "../HoverMedal";
import Arrow from "../icons/Arrow";
import Festival from "../icons/Festival";
import { Image } from "../Image";
interface EventsProps {
  events: ActivityRecord[];
}

const Events = ({ events }: EventsProps) => {
  const currentTime = useCurrentTime();

  return (
    <section
      id="events"
      className="bg-yellow-500 w-full padding-container mx-auto py-12 md:py-24"
    >
      <div className="max-container padding-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center text-white relative bg-yellow-600 rounded-xl">
            <div className="w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]">
              <Festival color="white" />
            </div>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl">Events</p>
          </div>

          {events.map(
            (
              { url, image, startDate, isOverall, endDate, isScored },
              index
            ) => {
              const eventStatus = getEventStatus(
                new Date(startDate),
                new Date(endDate),
                isScored
              );

              return (
                <Link
                  to={url}
                  key={index}
                  className={cn(
                    "bg-white rounded-xl p-4 aspect-square flex items-center justify-between flex-col transition-all duration-300 ease-in-out relative overflow-hidden group wipe-up"
                  )}
                >
                  <span className="self-end absolute pointer-events-auto">
                    {isOverall && <HoverMedal />}
                  </span>
                  <div className="mt-6">
                    <Image src={image} height={1024} width={1024} />
                  </div>
                  {eventStatus.type === "countdown" ? (
                    <div className="flex justify-center text-center self-center px-2 lg:px-6 py-1 w-full text-blue-800 border md:text-lg truncate text-nowrap font-semibold rounded-full cursor-pointer group">
                      <div className="h-4 sm:h-6 overflow-hidden mr-2">
                        <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                          <div className="text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            <CountdownTimer
                              timeUntilStart={eventStatus.timeUntilStart}
                              currentTime={currentTime}
                            />
                          </div>
                          <div className="text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            <CountdownTimer
                              timeUntilStart={eventStatus.timeUntilStart}
                              currentTime={currentTime}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : eventStatus.type === "upcoming" ? (
                    <div
                      className={cn(
                        "flex justify-center text-center self-center px-2 lg:px-6 py-1.5 w-full border  md:text-lg truncate text-nowrap font-semibold rounded-full cursor-pointer group"
                      )}
                    >
                      <div className="h-4 sm:h-6 overflow-hidden mr-2">
                        <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                          <p className="text-blue-800 text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            {eventStatus.message}
                          </p>
                          <p className="text-blue-800 text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            {eventStatus.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : eventStatus.type === "ongoing" ? (
                    <div
                      className={cn(
                        "flex justify-center text-center self-center px-2 lg:px-6 py-1.5 w-full border  md:text-lg truncate text-nowrap font-semibold rounded-full cursor-pointer group",
                        eventStatus.type == "ongoing"
                          ? "ongoing "
                          : "text-blue-800"
                      )}
                    >
                      <div className="h-4 sm:h-6 overflow-hidden mr-2">
                        <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                          <p className="text-white text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            {eventStatus.message}
                          </p>
                          <p className="text-white text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            {eventStatus.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between px-4 lg:px-6 py-1.5 w-full text-white bg-blue-800  md:text-lg truncate text-nowrap font-semibold rounded-full cursor-pointer group">
                      <div className="h-4 sm:h-6 overflow-hidden mr-2">
                        <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                          <p className="text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            {eventStatus.message}
                          </p>
                          <p className="text-xs text-nowrap sm:text-base h-4 sm:h-6">
                            {eventStatus.message}
                          </p>
                        </div>
                      </div>
                      <div className="w-3 h-3 -rotate-45 group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out">
                        <Arrow />
                      </div>
                    </div>
                  )}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
