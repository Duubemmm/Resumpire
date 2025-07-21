import { useParams } from "react-router-dom";
import Template3 from "./Template3";
import Template4 from "./Template4";
import TemplateNew from "./TemplateNew";

const ResumeRouter = () => {
  const { templateId } = useParams();

  const templates = {
    3: <Template3 />,
    4: <Template4 />,
    new: <TemplateNew />,
  };

  return templates[templateId] || <div>Template not found</div>;
};

export default ResumeRouter;
