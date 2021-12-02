import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Dashboard";
import Banner from "./Banner";
import Card from "./Card";
import styles from "./styles/Dashboard.module.css";
import { listCourses } from "../../services/courses";
import { Course } from "../../domain/entities/Course";
import Loading from "../../components/Loading";
import Head from "next/head";

const Dashboard: React.FC & { Layout: React.FC } = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const loadCourses = async () => {
    setLoading(true);
    const [courses] = await listCourses(page);
    if (courses) {
      setCourses((current) => [...current, ...courses]);
      setPage((current) => current + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <>
      <Head>
        <title>Eduick :: Dashboard</title>
      </Head>
      <div className={clsx("container", styles.dashboard)}>
        <Banner />
        <section className={clsx(styles.courses)}>
          {courses.map((course: Course, idx) => (
            <Card
              key={idx}
              image={course.image}
              title={course.title}
              rating={course.rating}
              lessons={course.lessons}
            />
          ))}
        </section>
        {loading && <Loading />}
        <div className={styles["show-more__container"]}>
          <button className="button--primary" onClick={loadCourses}>
            {loading ? "Loading..." : "Show more"}
          </button>
        </div>
      </div>
    </>
  );
};

Dashboard.Layout = Layout;

export default Dashboard;
