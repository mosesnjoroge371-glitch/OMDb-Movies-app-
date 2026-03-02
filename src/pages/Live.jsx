 

export default function Live() {
  const liveChannels = [
    { id: 1, name: "Global News Live", category: "News" },
    { id: 2, name: "Sports Channel HD", category: "Sports" },
    { id: 3, name: "Anime Marathon Stream", category: "Entertainment" },
  ];

  return (
    <div className="page">
      <h2 className="page-title">Live TV</h2>

      <div className="live-grid">
        {liveChannels.map((channel) => (
          <div key={channel.id} className="live-card">
            <span className="live-badge">LIVE</span>
            <h3>{channel.name}</h3>
            <p>{channel.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
