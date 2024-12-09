import { getLeaderboardLayout2 } from "~/lib/util";
import { Category } from "~/types";
import Medal from "../icons/Medal";
import TeamScoreCard from "../TeamScoreCard";

interface ActivityLeaderboardProps {
  category: Category;
}

const ActivityLeaderboard = ({ category }: ActivityLeaderboardProps) => {
  const [podiumTeams, listTeams] = getLeaderboardLayout2(category.scores);

  return (
    <section className="max-container padding-container lg:px-[250px] flex flex-col w-full mt-4 mb-20">
      <div className="h-full mb-0">
        <div className="mb-4 flex justify-center items-center gap-4 text-lg font-semibold bg-red-800 rounded-lg px-6 py-4">
          <div className="w-[40px] h-[40px]">
            <Medal />
          </div>
          <p className="text-4xl font-semibold text-white">
            {category.category}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {[...podiumTeams, ...listTeams].map((team, index) => (
          <TeamScoreCard key={index} team={team} />
        ))}
      </div>
    </section>
  );
};

export default ActivityLeaderboard;
