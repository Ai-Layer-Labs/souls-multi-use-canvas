// src/components/ContentRouter.tsx
import React from "react";
import { ContentType, ContentData } from "../types";
import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";
import CodeComponent from "./CodeComponent";
import MapComponent from "./MapComponent";
import ChartComponent from "./ChartComponent";
import PDFComponent from "./PDFComponent";

interface ContentRouterProps {
  contentType: ContentType;
  data: ContentData;
}

const ContentRouter: React.FC<ContentRouterProps> = ({ contentType, data }) => {
  switch (contentType) {
    case "image":
      return <ImageComponent data={data} />;
    case "video":
      return <VideoComponent data={data} />;
    case "code":
      return <CodeComponent data={data} />;
    case "map":
      return <MapComponent data={data} />;
    case "chart":
      return <ChartComponent data={data} />;
    case "pdf":
      return <PDFComponent data={data} />;
    default:
      return (
        <div className="text-center text-gray-500 p-4">
          Unsupported content type
        </div>
      );
  }
};

export default ContentRouter;