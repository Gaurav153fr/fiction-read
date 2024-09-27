import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import { Slider } from "./ui/slider";
import { ArrowUp, Settings } from "lucide-react";

const ReadingSetting = ({
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  lineHeight,
  setLineHeight,
}: {
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  fontFamily: string;
  setFontFamily: Dispatch<SetStateAction<string>>;
  lineHeight: number;
  setLineHeight: Dispatch<SetStateAction<number>>;
}) => {
  const decrease = () => {
    if (fontSize > 12) setFontSize(fontSize - 1);
    localStorage.setItem("fontSize", String(fontSize));
  };

  const increase = () => {
    if (fontSize < 26) setFontSize(fontSize + 1);
    localStorage.setItem("fontSize", String(fontSize));
  };

  const handleFontFamilyChange = (value: string) => {
    setFontFamily(value);
    localStorage.setItem("fontFamily", value);
  };

  const [hidden, setHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div
      className="w-fixed fixed bottom-5 z-10 left-10 transition-transform flex justify-end gap-2"
      style={{ transform: hidden ? "translateY(200%)" : "translateY(0%)" }}
    >
      <Button
        variant="outline"
        className="rounded-full bg-muted"
        onClick={handleScrollTop}
      >
        <ArrowUp />
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="rounded-full bg-muted">
            <Settings />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="">
            <div className="flex justify-between align-middle items-center">
              <div className="font-semibold flex items-center justify-between">
                {" "}
                <div className="px-1">Font size</div>
                <div className="text-lg">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.78233 2.21707C2.70732 2.14206 2.60557 2.09991 2.49949 2.09991C2.3934 2.09991 2.29166 2.14206 2.21664 2.21707L0.216645 4.21707C0.0604351 4.37328 0.0604351 4.62655 0.216645 4.78276C0.372855 4.93897 0.626121 4.93897 0.78233 4.78276L2.09949 3.4656L2.09949 11.5342L0.78233 10.2171C0.62612 10.0609 0.372854 10.0609 0.216645 10.2171C0.0604349 10.3733 0.0604349 10.6265 0.216645 10.7828L2.21664 12.7828C2.29166 12.8578 2.3934 12.8999 2.49949 12.8999C2.60557 12.8999 2.70731 12.8578 2.78233 12.7828L4.78233 10.7828C4.93854 10.6265 4.93854 10.3733 4.78233 10.2171C4.62612 10.0609 4.37285 10.0609 4.21664 10.2171L2.89949 11.5342L2.89949 3.4656L4.21664 4.78276C4.37285 4.93897 4.62612 4.93897 4.78233 4.78276C4.93854 4.62655 4.93854 4.37328 4.78233 4.21707L2.78233 2.21707ZM10.5 2.74997C10.7107 2.74997 10.8988 2.88211 10.9703 3.08036L13.9703 11.3999C14.064 11.6597 13.9293 11.9462 13.6696 12.0399C13.4098 12.1336 13.1233 11.9989 13.0296 11.7392L12.0477 9.016H8.95228L7.97033 11.7392C7.87666 11.9989 7.59013 12.1336 7.33036 12.0399C7.07059 11.9462 6.93595 11.6597 7.02962 11.3999L10.0296 3.08036C10.1011 2.88211 10.2892 2.74997 10.5 2.74997ZM10.5 4.72396L11.7412 8.166H9.25879L10.5 4.72396Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex select-none items-center gap-2 ">
                <Button
                  onClick={decrease}
                  variant="secondary"
                  disabled={fontSize <= 12}
                >
                  -
                </Button>
                <span>{fontSize}</span>
                <Button
                  onClick={increase}
                  variant="secondary"
                  disabled={fontSize >= 26}
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="mt-4">
              <Select onValueChange={handleFontFamilyChange} value={fontFamily}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Font Family" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Font Family</SelectLabel>
                    
                    <SelectItem value="roboto" className="font-roboto">
                      Roboto
                    </SelectItem>
                    <SelectItem value="monospace" className="font-mono">
                      Monospace
                    </SelectItem>
                    <SelectItem value="Ubuntu" className="font-mono">
                      Ubuntu
                    </SelectItem>
                    <SelectItem value="Comfortaa" className="font-mono">
                      Comfortaa
                    </SelectItem>
                    <SelectItem value="Libre Baskerville" className="font-roboto">
                    Libre Baskerville
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="my-2 font-semibold ">
              <div className="py-1">Line height</div>
              <Slider
                defaultValue={[lineHeight]}
                max={6}
                step={0.25}
                min={1}
                onValueChange={(e) => {
                  setLineHeight(e[0]);
                  localStorage.setItem("lineHeight", e[0].toString());
                }}
              />
              {lineHeight}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ReadingSetting;
