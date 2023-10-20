const single = (resource) => ({
    id: resource.id,
    name: resource.name
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};