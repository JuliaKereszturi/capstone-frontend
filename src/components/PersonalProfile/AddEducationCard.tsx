import React from "react";

import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";
import { ReactComponent as AddSvg } from "../../assets/icons/essential/add.svg";

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
      <div
        className="bg-white shadow-custom p-4 border border-gray-200 rounded-lg shadow-md max-w-sm"
        style={{
          padding: "30px 20px",
          borderRadius: "20px",
          boxShadow: "4px 5px 20px 4px #95989E14",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <EditSquare className="min-w-6 min-h-6 w-6 h-6 fill-current text-primary-600" />
        </div>
        {items.map((item, index) => (
          <div className="mb-2" key={`${item.name}-${item.year}`}>
            <h3 className="text-md text-primary-400 font-semibold">
              {item.name}
            </h3>
            <p className="text-sm text-grayish">{item.detail}</p>
            <p className="text-sm text-grayish">{item.year}</p>
          </div>
        ))}

        <button
          className="flex items-center justify-center bg-white text-primary-400 border border-primary-400 font-roboto py-2 px-4 rounded hover:bg-primary-500 hover:border-primary-500 hover:text-white transition ease-in duration-200"
          onClick={onAddClick}
        >
          <AddSvg />
          Add Education
        </button>
      </div>
    );
  };


export default AddEducationCard;