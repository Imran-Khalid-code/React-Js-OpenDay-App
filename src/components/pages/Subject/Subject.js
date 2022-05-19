import React from "react";
import OpenData from "../../../data/OpenDay.json";

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
													<div>{lesson.title}</div>
													<div> {lesson.description_short} </div>
													<div>{lesson.start_time}</div>
													<div>{lesson.room}</div>
													<div>{lesson.location.address}</div>
													<div> {lesson.location.postcode}</div>
													<div>{lesson.location.website}</div>
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
