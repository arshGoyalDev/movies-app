import { ProfileCard } from "../cards";

const CastCrew = ({ data }) => {
  return (
    <>
      {Object.keys(data).map((key) => {
        let output = "";
        if (key !== "id" && data[key].length !== 0) {
          output = (
            <div key={key} className={`details--${key}`}>
              <h3>{key}</h3>
              <div>
                {data[key].map((member) => (
                  <ProfileCard key={member.credit_id} data={member} />
                ))}
              </div>
            </div>
          );
        }
        return output;
      })}
    </>
  );
};

export default CastCrew;
