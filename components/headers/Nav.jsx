"use client";
import Link from "next/link";
import { menuData } from "@/data/menu";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Nav() {
  const [parentActive, setParentActive] = useState(-1);
  const [subparentActive, setsubParentActive] = useState(-1);
  const pathname = usePathname();
  const isMenuActive = (menuItem = menuData[0]) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.submenu) {
      menuItem.submenu?.forEach((elm2) => {
        if (elm2.href?.includes("/")) {
          if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
        if (elm2.submenu) {
          elm2.submenu.forEach((elm3) => {
            if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          });
        }
        if (elm2.homeMenuItems) {
          elm2.homeMenuItems.forEach((elm3) => {
            if (elm3.buttons) {
              elm3.buttons.forEach((elm4) => {
                if (elm4.href == pathname) {
                  active = true;
                }
              });
            }
          });
        }
      });
    }

    return active;
  };

  return (
    <>
      {menuData.map((item, index) => (
        <li key={index} className={item.className || ""}>
          <Link
            href={item.href}
            className={isMenuActive(item) ? "menuActive" : ""}
            onClick={() =>
              setParentActive((pre) => (pre == index ? -1 : index))
            }
          >
            {item.label} {item.iconClass && <i className={item.iconClass}></i>}{" "}
          </Link>
          {item.submenu && (
            <ul
              className={`submenu ${
                item.label == "Home" ? "has-homemenu" : ""
              } ${parentActive == index ? "active" : ""} `}
            >
              {item.submenu.map((subItem, subIndex) =>
                subItem.homeMenuItems ? (
                  <li key={subIndex}>
                    <div className="homemenu-items">
                      {subItem.homeMenuItems.map((homeItem, homeIndex) => (
                        <div className="homemenu" key={homeIndex}>
                          <div className="homemenu-thumb">
                            <Image
                              src={homeItem.imageSrc}
                              width={240}
                              height={300}
                              alt="img"
                            />
                            <div className="demo-button">
                              {homeItem.buttons.map((button, buttonIndex) => (
                                <Link
                                  href={button.href}
                                  className="theme-btn"
                                  key={buttonIndex}
                                >
                                  {button.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">{homeItem.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={subIndex} className={subItem.className || ""}>
                    <Link
                      href={subItem.href}
                      className={isMenuActive(subItem) ? "menuActive" : ""}
                      onClick={() =>
                        setsubParentActive((pre) =>
                          pre == subIndex ? -1 : subIndex
                        )
                      }
                    >
                      {subItem.label}{" "}
                      {subItem.iconClass && (
                        <i className={subItem.iconClass}></i>
                      )}
                    </Link>
                    {subItem.submenu && (
                      <ul
                        className={`submenu  ${
                          subparentActive == subIndex ? "active" : ""
                        } `}
                      >
                        {subItem.submenu.map((nestedItem, nestedIndex) => (
                          <li key={nestedIndex}>
                            <Link
                              className={
                                isMenuActive(nestedItem) ? "menuActive" : ""
                              }
                              href={nestedItem.href}
                            >
                              {nestedItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
