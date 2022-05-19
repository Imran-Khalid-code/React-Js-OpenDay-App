import React from "react";
import OpenData from "../../../data/OpenDay.json";
import styles from "./Subject.module.scss";

const Subject = () => {
	return (
		<>
			<div>
				{OpenData.map((openDetail) => {
					return (
						<div>
							{openDetail.topics.map((next) => {
								return (
									<div>
										{next.programs
											.filter((lesson) => lesson.id === 2906)

											.map((lesson) => (
												<p>
													<h1 className={styles.title}>{lesson.title}</h1>
													<div className={styles.content}>
														{lesson.description_short}
													</div>
													<div className={styles.content}>
														{lesson.start_time}
													</div>
													<div className={styles.content}>{lesson.room}</div>
													<div className={styles.content}>
														{lesson.location.address}
													</div>
													<div className={styles.content}>
														{" "}
														{lesson.location.postcode}
													</div>
													<div className={styles.content}>
														{lesson.location.website}
													</div>
													<div>
														<img src={lesson.location.cover_image} />
													</div>
												</p>
											))}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Subject;
