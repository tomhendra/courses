<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Jira Essentials with Agile Mindset</h1>
</div>

## Introduction

Jira Essentials from Atlassian University certified training. [Course link](https://training.atlassian.com/jira-essentials-agile-mindset).

## Index of topics

1. [Course overview](#course-overview)
2. [Agile and Jira Overview](#agile-and-jira-overview)
3. [Visualize Work using Project Boards](#visualize-work-using-project-boards)
4. [Enrich Issues](#enrich-issues)
5. [Kanban Method](#the-kanban-method)
6. Lean and Agile Principles
7. Scrum Overview 1: Artifacts
8. Scrum Overview 2: Roles & Events
9. Quick and Basic Search
10. JQL
11. Filters
12. Epics
13. Dashboards
14. Putting it All Together

## Course Overview

- Two main ways to use Jira:
  - Cloud: Hosted by Atlassian
  - Server / Data Center: Self-hosted
- If using the Cloud version, there are two options to choose from: classic projects and next gen projects.
- Next gen projects are slightly easier to configure.

## Agile and Jira Overview

### What is Agile?

- A way of getting things done.
- An empirical approach to project management. A scientific or data-driven approach to project management.
- You continuously develop the plan, process and product.
- A mindset.

### Why Agile?

- Effectiveness: Perform better than traditional projects.
- Empower the team: Leverage team knowledge and increase job satisfaction.
- Manage complexity: Simple project management approach to increasing complexity.

### What is an Agile Mindset

- A growth / continuous improvement way of working.
- Allowing the data to change your approach.
- Uses agile techniques to accomplish work.

### Why an Agile Mindset?

- For an agile team to perform at its best, all team members must have an agile mindset.

### What is Jira?

- A tool to help teams perform, manage and visualize work.
- Models the team's current process / workflows.
- Can be configured to fit the way the team wants to work.

### Why Jira?

- Leverage project management technology allowing teams to focus on their work.
- Facilitates planning, prioritising, organizing and completing work.
- Visualizes work using project boards, reports and dashboards.
- Facilitates team communication.

### How Does Jira Relate to an Agile Mindset?

- Jira is a tool that teams use to model and execute their agile processes.
- A tool that helps implement the practices related to an agile mindset.

### What is a Jira Issue?

- An item of work (work item) identified by the team.
- An issue has an associated type (e.g. story, task, bug).
- The details of the issues are known as fields.
- Each issue has an issue key assigned automatically by Jira.
- The issue key is made of two parts: project key + unique issue number.

### What is a Jira Project?

- A collection of related issues. It's up to the team to decide which issues belong to which project.
- A team's 'to do' list.
- Can have a fixed end date or ongoing project.
- Has an associated type (e.g. kanban, scrum)
- Each issue belongs to only one project.

### What is a Project Board?

- A two-dimensional 'to do' list.
- A way to visualize issues.
- A visualization of the team's processes or workflow.
- Displays issues as cards.

### Jira User Types

- Three main Jira user types:
  - Jira Administrator: Configures the Jira instance for all users.
  - Jira Project Administrator: Can configure a Jira project to match the team's process.
  - Team Member: Works on projects

### Takeaways

- Agile is a way of working on projects.
- Jira is a tool teams use to manage and visualize the work of a project.
- Jira can be configured to match a team's continuously improving processes.
- A Jira issue is an item of work identified by the team.
- Project boards visualize a team's work.
- The main types if Jira users are Jira Administrator, Jira Project Administrator & Team Member.

## Visualize Work using Project Boards

### Visualizing Work

- Visualizing work goes way back in history.
- Simple example is a todo list.
- Reminds you what to do.
- Focuses you on a specific set of tasks.
- Can set priorities be rearranging the list.
- Visualizes progress by tracking of tasks as you accomplish them.
- A project board is another way to visualize work.
- A principle of agile projects is to visualize the work.
- A board is an agile tool used to visualize and manage work.
- Reports & dashboards are other ways to visualize work.

### Why visualize work?

- To easily see the work of the project.
  - Easily see the (true) current state.
  - Organizes and focuses the team.
  - Only work on the tasks on the board.
- To manage things.
  - Easy to add and prioritise and prioritize he work on the project.
  - Easy to update work items.
- To improve the team's way of working.
  - Can visually identify problems.

### Workflows

- The set of columns on a board represent a workflow (or process) for completing the work of an issue.
- Workflows are broken down into statuses(or steps).
- In Jira boards and workflows are closely related.
  - A team works using the board.
  - The board's structure is defined by the underlying workflow.
- A key part of agile is to continuously improve the process of a team.
- This is enabled by visualizing the process.

### Jira Boards & Workflows

- Boards are created automatically, but you can also created additional boards at any time.
- This allows you to use multiple boards showing specific issues for your projects.
- Every project in Jira automatically has an associated workflow.
- The status field for each issue must be set to one of the workflow's statuses.
- Boards are a view of issues arranged by status.
- Moving an issue changes the value of it status field.
- An easy way to change the status of an issue is to drag the issue to a new column in the board.

### Takeaways

- A project board is a two-dimensional ay to visualize the work of a team.
- In Jira, a workflow is often represented using a project board.
- Project board columns usually map to the status fields of issues.
- Board columns can be added or removed to match the team's desired process.

## Enrich Issues

- Issues contain work-related information.
- There are many ways to enrich issues.
  - Can add attachments.
  - Add comments.
  - Link to other issues or show dependency of issues.
  - Log work related to the issues.
  - Estimate time completion.
  - Use the @user to mention users.

### Issue types

- When you create an issue you must specify its issue type.
  - **Story** is a requirement from the user's perspective, to identify the value to the user.
  - **Task** is a team work item e.g. upgrading the version of an internal tool.
  - **Bug** is a flaw that needs to be fixed.
  - **Epic** is a big issue that can contain other issues.
  - **Custom** issue types are for the team's specific needs.
  - **Subtask** is a child of another issue. Any issue type can contain a subtask.

### Why issue types?

- Supports different types of work items.
- Each type can have different field values, screens and workflows.
- Can report on types separately.

### Subtasks

- An issue type that must have a parent issue.
- Allow an issue to be broken down into individually manageable tasks.
- Can be more technical than the parent issue.
- E.g. the parent issue could be a story showing the value from a user's perspective, the subtasks can identify & track the technical work related to the story.
- Subtasks have their own issue keys and fields.
- Subtasks have independent workflow status.
- Can have different assignees for each subtask.
- Can uniquely progress across the project board.

### Labels

- A field used to categorize and search for issues that are related.
- To add or create a label use the labels field.

### Developer Integration Overview

- If you integrate Jira with a version control and/or build system you'll see the development panel in issue details.
- Can create new branches directly from Jira, or view existing branches related to the issue.
- Integration works through the issue key. Information related to version control will automatically show up in Jira when:
  - Using issue key in commit message.
  - Using issue key in branch name.
  - Including issue key in pull request title (or Jira can use issue key from associated commit or branch).
  - Jira uses he issue key associated with the commit in build / deployment.

### Takeaways

- An issue contains a diverse et of fields that are used to add information to the issue.
- Issues can facilitate team communication with comments and @mentions.
- Labels can be used to categorize and search for issues.
- Jira can be integrated with version control and/or build systems to improve developer-related communication.

## The Kanban Method

### Kanban Method Overview

- Agile is a way of thinking and working. It is not a specific methodology.
- An agile method or framework is an approach to implementing agile.
- Common agile methods include agile and scrum.
  - Each embody core principles of agile.
  - These are often combined.

### What is the Kanban Method?

- The kanban method is used to manage a continuous queue of work.
- Commonly used ideas include:
  - Visualize work.
  - Remove process bottlenecks to improve "flow" of value.
  - Limit work in progress.
  - Pull work rather than push (where it makes sense).
  - Continuously prioritize work items.

### Why Choose the Kanban Method?

- Very lightweight and efficient.
- Evolutionary approach of transforming to agile.
- Works well if the workflow is service-oriented.
  - Operations.
  - Support.
  - Maintenance development.
  - New hire funnel.
- Supports multi-team and multi-project workflows.

### Improving Flow

- Continuously moving items to the done column is known as "flow".
- One way to improve flow is to limit work in progress (WIP).

#### How?

- Specify the minimum and/or maximum number of issues allowed in certain project board columns.

#### Why?

- Better flow.
- Limits waste.
- Promotes teamwork.

### What Should WIP Limits be Set To?

- Could start WIP with no limits and see how the flow of the team is progressing.
- If there are no problems there is probably no reason to set limits.
- Add WIP limits as the process shows problems.
- Could set WIP limits to discourage multitasking.
- Could set WIP limits on the steps the team neglects.

### Why Agile Reports?

- One way to improve a team's flow is to look at agile reports.
- Visualize work of the team.
- Promote transparency showing the true state of the project.
- Aid troubleshooting and continuous improvement through identifying problem areas.
- Aid planning and estimating.
- A common kanban report related to flow is the Cumulative Flow Diagram, which shows the number of issues per status over time.

### Pull vs Push

- Performers either push work to the next step, or pull work from the previous step.
- On a kanban board you often have items of pushing and pulling.

### Why pull?

- Empowers the team: Team members select work, they are not assigned work.
- Maintains a sustainable pace as the team members decide when they are ready for more work.

### Planning Work

- The backlog column contains items that are not ready to be worked on. They may need more information and may never be prioritized high enough to be worked on.
- Since items in the backlog can't be worked on directly, one feature in Jira is to separate the backlog from the project board.

### Why a Separate Backlog?

- Simplicity: Separates the planning of issues from the project board.
- The team can focus on work items that are ready to be worked on.
- Once you have separated the backlog in Jira you'll see a backlog tab. You can move issues onto the project board when they are ready.

### Takeaways

- Kanban is a lightweight agile method.
- A project board should have a continuous flow of issues moving from backlog to done columns.
- Work in progress limits can improve the flow of value by focusing the team.
- In Jira, the backlog can be separated from the project board, simplifying the board and allowing separate backlog work.
