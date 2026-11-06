/// Every account gets Togetherly+. Payment is not used on this server.

onRecordCreate((e) => {
  e.record.set("plus", true);
  e.next();
}, "users");
