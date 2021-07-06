# Team Health Checker
_This tool is still in development and is not ready for usage at this point._

### v. 0.0.3

## About

Customisable in-house tool for companies, groups or organisations in order to gather, store and compare team metrics based solely on teams (user voting is anonymous).

This tool will create sessions where users can vote on predefined questions using three options: Agree, Disagree and Neutral.
Once the session is complete a report is created, showing all votes on questions along with the latest trend for that question, if a previous report exists.

Data storage will be handled using NoSQL and DynamoDB.

_All features below are set to release prior to version 1._
| Feature | Status |
| --- | --- |
| Initial Styling | Complete |
|  Session Boilerplate | Complete |
| Create Session | In Progress |
| DynamoDB Architecture | In Backlog |
| Create Reports | In Backlog |
| Compare Reports | In Backlog |
| Documentation | In Backlog |
| Youtube Tutorial | In Backlog |


## Local instructions

`build` - rebuild nextjs for production

`dev` - run development environment locally

`start` - run production environment locally

`lint` - check for any best practice issues using tslint rules

`lint:clean` - check for best practice issues and attempt to fix them automatically

`test` - run unit tests

`test:coverage` - run unit tests with html report generation at the end

## Development

Trello board: https://trello.com/b/pwz9bIsA/team-health-checker

### Commit Methodology
Currently there are no ticket numbers and no Pull Requests, since I am the only contributor to the project. All commits start with one of the following code words

| Word | Description |
| --- | --- |
| build | change affecting the boilerplate, build or runtime of the project. |
| docs | related to documentation in any shape or form |
| documentation | deprecated. see 'docs' |
| refactor | modifying existing code to make it cleaner or improve performance |
| feature | implementation of new feature |
| fix | bugfix |
| style | any changes to styling |
| tests | adding, changing or removing unit tests |
