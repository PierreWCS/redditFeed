import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import AdaptingButtons from "./services/AdaptingButtons";

const ContentSelector = ({ contentSelected, setContentSelected }) => {
  return (
    <div className="selectorsContainer">
      <AdaptingButtons
        buttonType="popular"
        text="Popular"
        status={contentSelected === "popular" ? "selected" : "default"}
        color="red"
        setContent={setContentSelected}
        icon={<WhatshotIcon />}
      />

      <AdaptingButtons
        buttonType="new"
        text="New"
        status={contentSelected === "new" ? "selected" : "default"}
        color="blue"
        setContent={setContentSelected}
        style={{ marginLeft: "15px" }}
        icon={<NewReleasesIcon />}
      />
      <style jsx>
        {`
          .selectorsContainer {
            background-color: white;
            width: 50%;
            height: 75px;
            display: flex;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 3px;
            margin-bottom: 15px;
          }

          .hotButton {
            color: red;
          }

          @media (max-width: 1060px) {
            .selectorsContainer {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ContentSelector;
