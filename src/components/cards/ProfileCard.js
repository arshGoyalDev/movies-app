const ProfileCard = ({ data }) => {
  return (
    <div key={data.name} className="details--cast--card">
      <div className="details--cast--card--photo">
        {!data.profile_path ? (
          <p style={{ padding: "5px" }}>Sorry! No photo available</p>
        ) : (
          <img src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} />
        )}
      </div>

      <div className="details--cast--card--body">
        <p className="name">{data.name}</p>
        <p className="role">{data.character ? data.character : data.job}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
