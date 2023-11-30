const dom = document.querySelector("html");

const dfs = (node, id) => {
    if (node.id === id) {
        return { node: node, found: true };
    }
    for (let i = 0; i < node.children.length; ++i) {
        let res = dfs(node.children[i], id);
        if (res.found) return res;
    }
    return { node: node, found: false };
};

const getElementById = (id) => {
    let element = dfs(dom, id);
    if (!element.found) return "Element not present in DOM";
    return element.node;
};

console.log(getElementById("myDiv"));
