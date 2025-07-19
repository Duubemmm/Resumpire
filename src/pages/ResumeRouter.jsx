import { useParams } from "react-router-dom";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import TemplateNew from "./TemplateNew";

const ResumeRouter = () => {
  const { templateId } = useParams();

  const templates = {
    1: <Template1 />,
    2: <Template2 />,
    3: <Template3 />,
    new: <TemplateNew />,
  };

  return templates[templateId] || <div>Template not found</div>;
};

export default ResumeRouter;
