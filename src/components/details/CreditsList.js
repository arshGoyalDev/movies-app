import { PersonCard } from "../cards";

const CreditsList = ({ data, heading }) => {
  return (
    <div>
      <h4 className="capitalize font-medium px-10 md:px-28 lg:px-0">
        {heading}
      </h4>
      <div className="scrollbar flex gap-3 px-10 md:px-28 lg:px-0 mt-3 md:mt-5 overflow-auto">
        {data.map((castMember) => (
          <PersonCard key={castMember.credit_id} data={castMember} type="details" />
        ))}
      </div>
    </div>
  );
};

export default CreditsList;
