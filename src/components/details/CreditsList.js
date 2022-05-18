import { PersonCard } from "../cards";

const CreditsList = ({ data, heading }) => {
  return (
    <div className="px-1">
      <h4 className="capitalize font-medium px-9">{heading}</h4>
      <div className="flex gap-3 px-9 mt-3 overflow-auto">
        {data.map((castMember) => (
          <PersonCard key={castMember.credit_id} data={castMember} />
          // console.log(castMember)
        ))}
      </div>
    </div>
  );
};

export default CreditsList;
