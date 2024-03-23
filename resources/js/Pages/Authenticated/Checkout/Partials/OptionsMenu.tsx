import {
  Button,
  Checkbox,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Slider,
  Tooltip,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGear } from "react-icons/fa6";

export default function OptionsMenu({
  productItemSize,
  setProductItemSize,
}: {
  productItemSize: number;
  setProductItemSize: (px: number) => any;
}) {
  const [isPrintOnSubmit, setPrintOnSubmit] = useState<boolean>(
    JSON.parse(localStorage.getItem("printOnSubmit") ?? "true"),
  );
  const { t } = useTranslation();

  return (
    <Tooltip content={ t( "Preferences"  )}>
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
                className="hover:text-gray-800 hover:before:content-none"
              />
              {t("Print on Submit")}
            </label>
          </MenuItem>
          <MenuItem>
            {t("Products Size")}
            <Tooltip placement="bottom" content={productItemSize + " px"}>
              {/* from:175px. to:275px. default:192px. mapping:0-100 to 175-275 */}
              <span className="flex cursor-pointer items-center gap-2 p-2">
                <label htmlFor="item-2" className="">
                  <Slider
                    id="item-2"
                    defaultValue={productItemSize - 175}
                    onChange={(e) => {
                      localStorage.setItem(
                        "productItemSize",
                        JSON.stringify(
                          Math.round(Number(e.target.value) + 175),
                        ),
                      );
                      setProductItemSize(
                        Math.round(Number(e.target.value)) + 175,
                      );
                    }}
                  />
                </label>
              </span>
            </Tooltip>
          </MenuItem>
        </MenuList>
      </Menu>
    </Tooltip>
  );
}
