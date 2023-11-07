const single = (resource) => ({
    id: resource.id,
    sender: resource.sender,
    sender_contact: resource.sender_contact,
    body_message: resource.body_message
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};