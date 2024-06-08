import { visit } from 'unist-util-visit';

export const directiveMapper = () => {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      let jsxElement = null;
      if (node.type === 'containerDirective' || node.type === 'leafDirective') {
        jsxElement = { type: 'mdxJsxFlowElement' };
      } else if (node.type === 'textDirective') {
        jsxElement = { type: 'mdxJsxTextElement' };
      }

      if (jsxElement === null) {
        return;
      }

      jsxElement = Object.assign(jsxElement, {
        name: '$$' + node.name,
        attributes: Object.entries(node.attributes).map(([name, value]) => ({
          type: 'mdxJsxAttribute',
          name,
          value,
        })),
        children: node.children,
        data: node.data,
      });
      parent.children.splice(index, 1, jsxElement);
    });
  };
};
