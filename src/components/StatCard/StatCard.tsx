import "./StatCard.scss";

type statCardProps = {
  stat: string | number;
  desc: string;
};
export default function StatCard({ stat, desc }: statCardProps) {
  return (
    <div className="stat-card">
      <h1 className="stat">{stat}</h1>
      <h2 className="desc">{desc}</h2>
    </div>
  );
}
