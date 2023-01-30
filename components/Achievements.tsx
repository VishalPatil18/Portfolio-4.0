import AchievementCard from '../components/AchievementCard';
import achievementsData from 'data/achievements';

export default function Achievements() {
  return (
    <>
      <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-6 text-black dark:text-white">
        Achievements
      </h3>
      <div className="flex gap-6 flex-col md:flex-row">
        {achievementsData.map((achievement, idx) => (
          <AchievementCard
            key={idx}
            title={achievement.title}
            subTitle={achievement.subTitle}
            gradient={achievement.gradient}
          />
        ))}
      </div>
    </>
  );
}
