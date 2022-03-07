import { ProfileCard } from "../cards";

const CastCrew = ({ data }) => {
  const removeDuplicates = (array, key) => {
    return [...new Map(array.map((item) => [item[key], item])).values()];
  };

  return (
    <>
      {Object.keys(data).map((key) => {
        let output = "";
        if (key !== "id" && data[key].length !== 0) {
          output = (
            <div key={key} className={`details--${key}`}>
              <h3>{key}</h3>
              <div>
                {removeDuplicates(data[key], "name").map((personData) => (
                  <ProfileCard key={personData.name} data={personData} />
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
