import classNames from "classnames";
import {
  CheckCircleIcon,
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

export default function ProfileTab({ name, isSelected }) {
  const icon = isSelected ? (
    <CheckCircleIcon className="h-6 w-6 mt-1 text-white" aria-hidden="true" />
  ) : (
    <XCircleIcon
      className="h-6 w-6 mt-1"
      style={{ color: "#337070" }}
      aria-hidden="true"
    />
  );

  return (
    <div
      className="flex-auto flex overflow-hidden rounded-lg p-4 shadow"
      style={{ backgroundColor: isSelected ? "#337070" : "#EBF1F1" }}
    >
      {icon}

      <div className="ml-2">
        <p
          className={classNames("truncate text-sm font-medium", {
            "text-white": isSelected,
          })}
        >
          {name}
        </p>

        <p
          className={classNames("text-xs text-center", {
            "text-white": isSelected,
          })}
        >
          Complete Step
        </p>
      </div>
    </div>
  );
}
