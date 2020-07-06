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
6. [Lean and Agile Principles](#lean--agile-principles)
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

### Agile Overview

#### What is Agile?

- A way of getting things done.
- An empirical approach to project management. A scientific or data-driven approach to project management.
- You continuously develop the plan, process and product.
- A mindset.

#### Why Agile?

- Effectiveness: Perform better than traditional projects.
- Empower the team: Leverage team knowledge and increase job satisfaction.
- Manage complexity: Simple project management approach to increasing complexity.

#### What is an Agile Mindset

- A growth / continuous improvement way of working.
- Allowing the data to change your approach.
- Uses agile techniques to accomplish work.

#### Why an Agile Mindset?

- For an agile team to perform at its best, all team members must have an agile mindset.

### Jira Overview

#### What is Jira?

- A tool to help teams perform, manage and visualize work.
- Models the team's current process / workflows.
- Can be configured to fit the way the team wants to work.

#### Why Jira?

- Leverage project management technology allowing teams to focus on their work.
- Facilitates planning, prioritising, organizing and completing work.
- Visualizes work using project boards, reports and dashboards.
- Facilitates team communication.

#### How Does Jira Relate to an Agile Mindset?

- Jira is a tool that teams use to model and execute their agile processes.
- A tool that helps implement the practices related to an agile mindset.

### Projects, Issues, Boards & User Types

#### What is a Jira Issue?

- An item of work (work item) identified by the team.
- An issue has an associated type (e.g. story, task, bug).
- The details of the issues are known as fields.
- Each issue has an issue key assigned automatically by Jira.
- The issue key is made of two parts: project key + unique issue number.

#### What is a Jira Project?

- A collection of related issues. It's up to the team to decide which issues belong to which project.
- A team's 'to do' list.
- Can have a fixed end date or ongoing project.
- Has an associated type (e.g. kanban, scrum)
- Each issue belongs to only one project.

#### What is a Project Board?

- A two-dimensional 'to do' list.
- A way to visualize issues.
- A visualization of the team's processes or workflow.
- Displays issues as cards.

#### Jira User Types

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

#### Why visualize work?

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

### Enriching Issues

- Issues contain work-related information.
- There are many ways to enrich issues.
  - Can add attachments.
  - Add comments.
  - Link to other issues or show dependency of issues.
  - Log work related to the issues.
  - Estimate time completion.
  - Use the @user to mention users.

#### Issue types

- When you create an issue you must specify its issue type.
  - **Story** is a requirement from the user's perspective, to identify the value to the user.
  - **Task** is a team work item e.g. upgrading the version of an internal tool.
  - **Bug** is a flaw that needs to be fixed.
  - **Epic** is a big issue that can contain other issues.
  - **Custom** issue types are for the team's specific needs.
  - **Subtask** is a child of another issue. Any issue type can contain a subtask.

#### Why issue types?

- Supports different types of work items.
- Each type can have different field values, screens and workflows.
- Can report on types separately.

#### Subtasks

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

#### What is the Kanban Method?

- The kanban method is used to manage a continuous queue of work.
- Commonly used ideas include:
  - Visualize work.
  - Remove process bottlenecks to improve "flow" of value.
  - Limit work in progress.
  - Pull work rather than push (where it makes sense).
  - Continuously prioritize work items.

#### Why Choose the Kanban Method?

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

#### What Should WIP Limits be Set To?

- Could start WIP with no limits and see how the flow of the team is progressing.
- If there are no problems there is probably no reason to set limits.
- Add WIP limits as the process shows problems.
- Could set WIP limits to discourage multitasking.
- Could set WIP limits on the steps the team neglects.

#### Why Agile Reports?

- One way to improve a team's flow is to look at agile reports.
- Visualize work of the team.
- Promote transparency showing the true state of the project.
- Aid troubleshooting and continuous improvement through identifying problem areas.
- Aid planning and estimating.
- A common kanban report related to flow is the Cumulative Flow Diagram, which shows the number of issues per status over time.

### Pull vs Push

- Performers either push work to the next step, or pull work from the previous step.
- On a kanban board you often have items of pushing and pulling.

#### Why pull?

- Empowers the team: Team members select work, they are not assigned work.
- Maintains a sustainable pace as the team members decide when they are ready for more work.

### Planning Work

- The backlog column contains items that are not ready to be worked on. They may need more information and may never be prioritized high enough to be worked on.
- Since items in the backlog can't be worked on directly, one feature in Jira is to separate the backlog from the project board.

#### Why a Separate Backlog?

- Simplicity: Separates the planning of issues from the project board.
- The team can focus on work items that are ready to be worked on.
- Once you have separated the backlog in Jira you'll see a backlog tab. You can move issues onto the project board when they are ready.

### Takeaways

- Kanban is a lightweight agile method.
- A project board should have a continuous flow of issues moving from backlog to done columns.
- Work in progress limits can improve the flow of value by focusing the team.
- In Jira, the backlog can be separated from the project board, simplifying the board and allowing separate backlog work.

## Lean & Agile Principles

### Toyota Production System

- Taiichi Ohno worked at Toyota, and was one of the architects of the Toyota Production System.
- Taiichi Ohno wrote a book in 1978 (english 1988) which describes what is now sometimes called "lean thinking" or "lean management".
- Many agile principles are similar to lean principles.

#### Toyota Simplified History

- After WW2 Japanese auto makers were well behind the US, and wanted to catch up in 3 years.
- Focus was to eliminate waste and increase productivity as resources were scarce.
- Embraced ideas from Ford, but used a more agile approach.
- Lean principles apply way beyond the manufacture of cars.

### Toyota Kanban

- Kanban is an object that controls the flow of work.
- The idea came to Toyota from studying US supermarkets.
  - Instead of push, only order when inventory is low (pull).
  - This matches the supply and demand. No build up of inventory over time if the demand reduces.
  - An empty box is a "kanban" - a signal to order more.
  - When a box is empty, another is brought from storage.
  - A box is then ordered to replace the one taken from storage.

#### Benefits of Kanban Systems

- Visualize the work.
- They are very simple.
- Reliable.
- Efficient.
- Eliminate waste.
- Identifies bottlenecks / easy to improve.

#### Kanban Definitions

- **Kanban Token** is an object that controls the flow of work.
- **Kanban System** is a system that controls the flow of work using kanbans.
- **Kanban Method** is lightweight agile method.

### Lean principles

#### 1. Empower the team.

- "Operators acquire a broad spectrum of production skills, and participate in building up a total system in the production plant. In this way, the individual can find value in working." - Taiichi Ohno
  - Diverse skills.
  - Trust team members to make decisions.
  - Improves team satisfaction.
- _"A championship team combines good teamwork with individual skill"._
- _"In modern industry, harmony among people in a group, an in teamwork, is in greater demand than the art of the individual craftsman"._

#### 2. Visualize work.

- Visual control: Toyota uses Kanbans to signal and control the work.
- Andon board: An informational board that shows any existing problems.
- _"When one looks up, the andon (the line stop indication board) comes into view, showing the location and nature of trouble situations at a glance."_

#### 3. Embrace the scientific method.

1.  Create a hypothesis.
2.  Build an experiment.
3.  Observe / learn from the results.
4.  Repeat / reiterate.

- _"Progress can not be generated when we are satisfied with existing solutions."_
- **Continuously learn and improve**.
- **Embrace change**.

#### 4. Improve the "flow" of value.

- Creating and improving flow leads to continuous improvement.
- _"Just-in-time means that, in a flow process, the right parts needed in assembly reach the assembly line at the time they are needed and only in the amount needed."_
- _"Reducing the number of kanban increases their sensitivity."_
- **Limit work in progress.**
- With less WIP, problems tend to present themselves more clearly.
- _"People prefer working with large quantities. It is easier than having to work hard and learn from producing small quantities"._
- Problems can be hidden in the volume of what you are doing, and not be discovered until much later.
- **Map the value stream:**
  1. Draw the current state of how value is being produced for customers.
  2. Draw the desired future state which has higher value for the customer.
  3. Iterate towards the future state.
- **Pull work.**
- **Eliminate waste**, then you are only working on things that are important and are improving the flow.
- **Reduce setup times.** Example in software is using cloud computing, where you can quickly dynamically create instances of compute and destroy them.
- **Automate what should be automated.**

#### 5. Build quality in.

- _"Produce quality products 100% of the time."_
- **The process should identify problems**.
- _"distinctions between normal and abnormal operations must be clear and countermeasures (solutions) always taken to prevent recurrence."_
- It's important to **fix problems when they are discovered**.
- _"Correct a mistake immediately. To rush and not take time to correct a problem causes work loss later."_
- This shows a problem with the traditional approach of QA'ing a product at the end of the lifecycle.
- TDD and automated testing supports this principle.
- **Identify and fix the root cause**.
- _"By asking why five times and answering it each time, we can get to the real cause of the problem, which is often hidden behind more obvious solutions."_ - The "Five Whys" approach to root cause analysis.

### Agile Manifesto

- In 2001 a group of people got together to discuss a better way of developing software.
- The result was [The Manifesto for Agile Software Development](http://agilemanifesto.org).
- At thee time the traditional waterfall approach to developing software was very popular.
- This is where you create one big upfront plan, and then build one big release of the software in phases.
- The Agile Software Manifesto contains four value statements that can be thought of as the agile mindset.

1. **Individuals and interactions** over processes and tools.
2. **Working software** over comprehensive documentation.
3. **Customer collaboration** over contract negotiation.
4. **Responding to change** over following a plan.

- Although there is value in the items on the right, we value the items on the left more.
- In addition to the four value statements, there are [twelve principles](http://agilemanifesto.org/principles.html) behind the agile manifesto.

#### Takeaway Principles

- Four value statements interpreted:

1. Empower the team. _(Individuals and interactions over processes and tools)_
2. Embrace change. _(Working software over comprehensive documentation)_
3. Partner with the customer. _(Customer collaboration over contract negotiation)_
4. Plan, develop and deliver incrementally. _(Responding to change over following a plan)_

### Lean vs Agile

#### Lean

- Used at MIT by John Krafcik (1988).
- Described the ideas of the Toyota Production System.
- Applies to any type of project.

1.  **Empower the team**
2.  **Visualize work**
3.  **Experiment using the scientific method**
    - a. Continuously learn and improve
    - b. Embrace change.
4.  **Improve the flow of value**
    - a. Limit work in progress.
    - b. Map the value stream.
    - c. Pull work.
    - d. Eliminate waste.
    - e. Reduce setup times.
    - f. Automate what should be automated.
5.  **Build quality in**
    - a. The process should identify problems.
    - b. Fix problems when they are discovered.
    - c. Identify and fix the root cause.

#### Agile

- Used by participants who created the Agile Manifesto (2001).
- Described a lightweight alternative to waterfall software development.
- Applies to any type of project.

1.  **Empower the team**
    - a. Select motivated individuals.
    - b. Teams should self-organize.
    - c. Collaborate to create shared understanding.
2.  **Embrace change**
    - a. Partner with customer.
    - b. Obtain fast feedback.
    - c. Continuously inspect and adapt.
3.  **Plan, develop and deliver incrementally**
    - a. Prefer conversations or conveying information.
    - b. Continuously refactor to maintain agility.
    - c. Maintain a sustainable pace.
    - d. Completed work items are the primary measure of success.
4.  **Focus on Value**
    - a. Eliminate waste.
    - b. Continuously strive for simplicity.
    - c. Don't compromise on quality.

#### Combined Lean and Agile Principles

1.  **Empower the team**
    - a. Select motivated individuals.
    - b. Teams should selforganize.
    - c. Collaborate to create shared understanding.
2.  **Visualize work**
3.  **Experiment using the scientific method**
    - a. Continuously learn and improve.
    - b. Embrace change.
    - c. Partner with customer.
    - d. Continuously inspect and adapt.
4.  **Plan, develop and deliver incrementally**
    - a. Prefer conversations or conveying information.
    - b. Continuously refactor to maintain agility.
    - c. Maintain a sustainable pace.
    - d. Completed work items are the primary measure of progress.
    - e. Obtain fast feedback.
5.  **Improve the flow of value**
    - a. Limit work in progress.
    - b. Map the value stream.
    - c. Pull work.
    - d. Eliminate waste.
    - e. Reduce setup times.
    - f. Automate what should be automated.
    - g. Continuously strive for simplicity.
6.  **Build quality in**
    - a. Don't compromise on quality.
    - b. The process should identify problems.
    - c. Fix problems when they are discovered.
    - d. Identify and fix the root cause.
