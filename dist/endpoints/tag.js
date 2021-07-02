"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagEndpoint = exports.TagPaths = void 0;
const base_1 = require("./base");
const issueTag_1 = require("../entities/issueTag");
exports.TagPaths = {
    issueTags: '/issueTags',
    issueTag: '/issueTags/{tagId}'
};
class TagEndpoint extends base_1.BaseEndpoint {
    all(paginationOptions = {}) {
        return this.getResourceWithFields(exports.TagPaths.issueTags, issueTag_1.IssueTagImpl, { qs: paginationOptions });
    }
    byId(tagId) {
        return this.getResourceWithFields(this.format(exports.TagPaths.issueTag, { tagId }), issueTag_1.IssueTagImpl);
    }
}
exports.TagEndpoint = TagEndpoint;
