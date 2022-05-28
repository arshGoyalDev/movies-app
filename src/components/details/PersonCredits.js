import { BackdropCard } from "../cards";

const PersonCredits = ({ castCredits, crewCredits, title }) => {
  return (
    <div>
      <h4 className="font-medium px-10 md:px-28 lg:px-0">{title}</h4>

      {castCredits && (
        <div className="mt-6">
          <h4 className="font-medium text-sm px-10 md:px-28 lg:px-0">
            As a cast member
          </h4>
          <div className="scrollbar flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
            {castCredits.reverse().map((item) => (
              <BackdropCard key={item.credit_id} data={item} />
            ))}
          </div>
        </div>
      )}

      {crewCredits && (
        <div className="mt-10">
          <h4 className="font-medium text-sm px-10 md:px-28 lg:px-0">
            As a crew member
          </h4>
          <div className="scrollbar flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
            {crewCredits.reverse().map((item) => (
              <BackdropCard key={item.credit_id} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonCredits;
