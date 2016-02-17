import { isArray, isStringOrNumber, isNullOrUndefined } from '../core/utils';

function renderChildren(children) {
	if (children && isArray(children)) {

	} else if (!isNullOrUndefined(children)) {
		if (isStringOrNumber(children)) {
			return children;
		} else {
			return renderNode(children);
		}
	}
}

function renderNode(node) {
	if (!isNullOrUndefined(node)) {
		const tag = node.tag;

		return `<${ tag }>${ renderChildren(node.children) || '' }</${ tag }>`;
	}
}

export default function renderToString(node) {
	return renderNode(node);
}