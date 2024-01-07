import {
  Button,
  Checkbox,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";

export default function OptionsMenu() {
  const [isPrintOnSubmit, setPrintOnSubmit] = useState<boolean>(
    JSON.parse(localStorage.getItem("printOnSubmit") ?? "true"),
  );
  return (
    <Menu>
      <MenuHandler>
        <Button variant="text">
          <FaGear className="text-lg text-blue-gray-500" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className="p-0">
          <label
            htmlFor="item-1"
            className="flex cursor-pointer items-center gap-2 p-2"
          >
            <Checkbox
              ripple={false}
              id="item-1"
              checked={isPrintOnSubmit}
              onChange={(e) => {
                localStorage.setItem(
                  "printOnSubmit",
                  JSON.stringify(e.target.checked) ?? "true",
                );
                setPrintOnSubmit(e.target.checked);
              }}
              containerProps={{ className: "p-0" }}
              className="hover:before:content-none hover:text-gray-800"
              crossOrigin={undefined}
            />
            Print on Submit
          </label>
        </MenuItem>
        {/* <MenuItem>Menu Item 2</MenuItem> */}
      </MenuList>
    </Menu>
  );
}
