import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import useHover from "~hooks//useHover";

export const SaveButton = ({
  size = "sm",
  savedStatus,
  isLoading = false,
  children,
  isFullWidth = false,
  onClick,
}: SaveButtonProps) => {
  const [hoverRef, isHovered] = useHover();
  const [isSaved, setIsSaved] = useState(savedStatus);

  useEffect(() => {
    setIsSaved(savedStatus);
  }, [savedStatus]);

  const saveAction = () => {
    try {
      onClick();
      setIsSaved((prevState) => !prevState);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button
      onClick={saveAction}
      isLoading={isLoading}
      ref={hoverRef}
      aria-label={isSaved ? "Saved" : "Not saved"}
      colorScheme="secondary"
      isFullWidth={isFullWidth}
      paddingInline="3%"
      size={size}
      fontWeight="regular"
      width="fit-content"
      leftIcon={
        isHovered || isSaved ? (
          <AiFillStar color="#fcc200" />
        ) : (
          <AiOutlineStar color="#fcc200" />
        )
      }
    >
      {children}
    </Button>
  );
};
export interface SaveButtonProps {
  size?: "sm" | "md" | "lg";
  savedStatus: boolean;
  isLoading?: boolean;
  children: string;
  isFullWidth?: boolean;
  onClick: () => void;
}

export default SaveButton;
