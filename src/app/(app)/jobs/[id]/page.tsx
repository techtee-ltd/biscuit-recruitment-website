import JobsIdClientComponent from "@/components/JobsIdClientComponent";
import { getJob } from "../../../../../sanity/sanity.query";

const JobsIdPage = async ({ params }: { params: { id: string } }) => {
  const job = await getJob(params?.id);
  return <JobsIdClientComponent job={job} />;
};

export default JobsIdPage;
