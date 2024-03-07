import React from "react";

import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";
import { ReactComponent as AddSvg } from "../../assets/icons/essential/add.svg";
import Button from "../button/buttons";

interface AddEducationCardProps {
  title: string;
  items: {
    name: string;
    detail?: string; // Optional property
    year?: string; // Optional property
  }[];
  onAddClick: () => void;
}

  const AddEducationCard: React.FC<AddEducationCardProps> = ({
    title,
    items,
    onAddClick,
  }) => {
    return (
      //  <div className="bg-white rounded-2xl p-6 shadow-lg max-w-[410px] mx-auto"></div>
      <div className="bg-white shadow-lg p-6 border rounded-[20px] border-gray-200 rounded-xlg max-w-[410px]">
        <div className="flex justify-between items-center">
          <p className="h4 font-roboto !font-semibold mb-2">{title}</p>
          <EditSquare className="min-w-6 min-h-6 w-6 h-6 fill-current text-primary-600" />
        </div>
        {items.map((item) => (
          <div className="mb-2" key={`${item.name}-${item.year}`}>
            <h3 className="!font-semibold h5 text-primary-450 !tracking-normal ">
              {item.name}
            </h3>
            <p className="body-text text-grayish !tracking-normal">
              {item.detail}
            </p>
            <p className="small-text text-grayish">{item.year}</p>
          </div>
        ))}
        <Button
          variant="secondary"
          onClick={() => console.log("Add Education button clicked")}
        >
          <AddSvg className="w-6 h-6 fill-current mr-2" />
          <p className="font-semibold">Add Education</p>
        </Button>
      </div>
    );
  };


export default AddEducationCard;
