export default function JobCollector({ collectedJobs, selectedCategory }) {
  // console.log(collectedJobs.filter((job) => job.tags.includes("javascript")));
  let filteredJobs = collectedJobs.filter((job) =>
    job.tags.includes(selectedCategory)
  );
  return filteredJobs.map((row, id) => (
    <div key={id} className="row">
      <div className="logo-section">
        <div className="logo">
          <img src={row.logo} width="40px" alt="" />
        </div>
      </div>
      <div className="left-section">
        <h5 className="company">{row.company}</h5>
        <h4 className="position">{row.position}</h4>
        <p className="location">{row.location}</p>
      </div>
      <div className="mid-section">
        {row.tags.slice(0, 10).map(function (tag) {
          return (
            <div className="tag" key={tag}>
              {tag}
            </div>
          );
        })}
      </div>
      <div className="mid-right-section">
        <p className="date">
          {new Date(row.date).toLocaleString().slice(0, 10)}
        </p>
      </div>
      <div className="right-section">
        <a href={row.url}>
          <button className="apply">Apply</button>
        </a>
      </div>
    </div>
  ));
}
