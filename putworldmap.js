var msg1 = {};

msg1.payload=msg.payload;

msg1.payload.lon= msg.payload.location.lng;

msg1.payload.lat=msg.payload.location.lat;

delete msg.payload.location;

msg1.payload.name="Wemos";

msg1.payload.icon = "map-pin";

msg1.payload.iconColor = "orange";

msg1.payload.radius=msg.payload.accuracy;

msg1.payload.date=Date().toString();

return msg1;

