import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {getCourse } from "../services/api";

export default function CourseDetails() {
    const {id} = useParams();
    const [course, setCourses] = useState(null);
    useEffect(() => {
        getCourse(id).then(res => setCourses(res.data));
    }, [id]);

    if (!course) return <Layout>Loading...</Layout>;

    return (
        <Layout>
            <h1 className="text-2xl font-bold">{course.titile}</h1>
            <p className="mt-4">{course.description}</p>
        </Layout>
    );

}