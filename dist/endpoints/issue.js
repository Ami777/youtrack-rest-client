"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueEndpoint = exports.CommandPaths = exports.IssuePaths = void 0;
const base_1 = require("./base");
const __1 = require("..");
const command_1 = require("../entities/command");
exports.IssuePaths = {
    issue: '/issues/{issueId}',
    issues: '/issues',
};
exports.CommandPaths = {
    commands: '/commands'
};
class IssueEndpoint extends base_1.BaseEndpoint {
    byId(issueId) {
        return this.getResourceWithFields(this.format(exports.IssuePaths.issue, { issueId }), __1.IssueImpl);
    }
    search(query, paginationOptions = {}, customFields = []) {
        return this.getResourceWithFields(exports.IssuePaths.issues, __1.ReducedIssueImpl, {
            qs: Object.assign({ query }, paginationOptions)
        }, customFields);
    }
    delete(issueId) {
        return this.toPromise(this.client.delete(this.format(exports.IssuePaths.issue, { issueId })));
    }
    create(issue, customFields = []) {
        return this.postResourceWithFields(exports.IssuePaths.issues, __1.IssueImpl, {
            body: issue
        }, customFields);
    }
    update(issue) {
        return this.postResourceWithFields(this.format(exports.IssuePaths.issue, { issueId: issue.id }), __1.IssueImpl, {
            body: issue
        });
    }
    executeCommand(command) {
        return this.postResourceWithFields(exports.CommandPaths.commands, command_1.CommandListImpl, {
            body: command
        });
    }
}
exports.IssueEndpoint = IssueEndpoint;
