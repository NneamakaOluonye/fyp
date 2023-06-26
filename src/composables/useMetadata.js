export default function (
    {
        title = "Welcome to Apex",
        description = "Welcome to Apex",
        canonical = 'https://dev.apex.dev'
    }, metadata = []
) {
    document.title = title
    createElement("meta", "description", description)

    metadata.forEach(meta => {
        createElement("meta", meta['name'], meta['content'])
    })

}

const createElement = (elementType, name, content) => {
    let element = document.createElement(elementType)
    element.setAttribute("name", name);
    element.setAttribute("content", content);

    document.head.appendChild(element);
}