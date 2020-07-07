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
7. [Scrum Overview 1: Artifacts](#scrum-overview-1-artifacts)
8. [Scrum Overview 2: Roles & Events](#scrum-overview-2-roles--events)
9. [Quick and Basic Search](#quick-and-basic-search)
10. [JQL](#jql)
11. [Filters](#filters)
12. [Epics](#epics)
13. [Dashboards](#dashboards)
14. [Putting it All Together](#putting-it-all-together)

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
    - b. Teams should self-organize.
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

## Scrum Overview 1: Artifacts

### What is Scrum?

- Scrum is a framework for developing, delivering and sustaining complex products.
- A way of achieving agility.
- Currently the most popular agile framework.

#### Continuous Learning

- A project starts as a vision or an idea of what to create.
- It's always best to start with the best vision that you can.
- The agile team then begins working for a period of time called an iteration. They create a small working piece of the product.
- After the first iteration, the team has learned things, and therefore the project vision has changed somewhat.
- After the second iteration, the team has built more of a working product, and again the vision has changed slightly due to the fact the team has learned things during the iteration.
- This process continues and the product moves closer and closer to the vision.

#### Increment

- After each iteration, the team has created what is known as an increment.
- An increment is a usable product that may be given to the customer.
- An increment is not always given to the customer, but the point is that it is capable to be given to the customer.
- Meets the organization's "definition of done." Generally a high quality subset of the product.
- Each increment contains the work of the current iteration, as well as all prior iterations.

#### Sprint

- A Sprint is a time-boxed period used to work on an increment of the product.
- Usually 1-4 weeks (typically 2 weeks)
- Up to the team to decide the duration of sprints, and in general this duration does not vary from sprint to sprint.

#### Parts of the Scrum Framework

- **Artifacts** - Product backlog, sprint backlog, sprint goal, sprint board, reports.
- **Roles** - Product Owner, Scrum Master, development team members, stakeholders.
- **Events / Meetings / Ceremonies** - Sprint, sprint planning meeting, daily standups, sprint review, sprint retrospective.

### Scrum Artifacts

- All artifacts provide project transparency.
- Enable team shared understanding.
- Enable inspection and adaptation.

#### Product Backlog

- An ordered, ever-changing todo list for the project.
- Can include features, improvements, bug fixes or any other items of work that the team has defined.
- Issues near the top should include more detail, because these items are actually closer to being worked on.
- Modifying the product backlog is called product backlog refinement.
- Once you have items in the backlog, you can create a sprint.

#### Sprint backlog

- A subset of the product backlog.
- The list of issues to be completed during the sprint.
- Includes the plan on how to accomplish the work of the issues.

#### Estimation: Story Points

- As you are planning the sprint, it is common to estimate each issue.
- A common estimation statistic is called "story points".
- Story points are a relative measure of the amount of work required to complete the story.
- Used to help decide how many stories can be completed in the sprint.
- Story points are often used as opposed to a more absolute measurement such as hours.
- The point is usually not to tie estimation directly to the number of hours, and hold the team members accountable to those hours.

#### Sprint Goal

- Represents the objective of the sprint's increment, and is agreed to by the team.
- Sprint goal os reached by completing the sprint backlog.
- Does not change during the sprint.
- The sprint is considered a success if the sprint goal is reached.

#### Why Have a Sprint Goal?

- Provides coherence to the product increment.
- In general you want each increment to have meaningful value for the customer.
- Enables flexibility with the sprint backlog.
- The sprint goal is considered a success if the sprint goal is reached, allowing the team to alter some of the issues that it works on during the sprint.

#### Sprint board

- Similar to the kanban board, but only contains issues from the sprint backlog.

#### Scrum Reports: Burndown Chart

- A burndown chart usually represents the number of story points completed over time during a sprint.
- The goal is for the remaining story points to reach 0 before the end of the sprint.

#### Scrum Reports: Sprint Report

- The Sprint report usually contains the burndown chart, and also the list of issues of the sprint and their current status.
- A good way for everybody to see how the sprint is progressing.

#### Velocity

- A term related to scrum that represents the rate at which the team accomplishes work.
- Usually it is the number of story points completed per sprint.

#### Scrum Reports: Velocity Chart

- Shows the estimated and actual velocity of the team over time.
- Teams can use this historic data to better estimate story points of the current sprint.

### Takeaways

- Scrum is an agile framework.
- An increment is a potentially shippable portion of the project hat meets the "definition of done".
- A sprint is a time-boxed period in which an increment is created.
- Scrum artifacts provide project transparency, enable shared understanding, and enable inspection and adaptation.
- Artifacts include the product backlog, the sprint backlog, the sprint goal, sprint boards & reports.
- Velocity is the rate in which the team accomplishes work, usually measured in story points per sprint.

## Scrum Overview 2: Roles & Events

### Scrum Roles

#### Scrum Team

- A Scrum team is made up of three roles:
  - Product Owner.
  - Scrum Master.
  - Development Team.
- Cross-functional: They generally have the skills to support the product throughout its entire lifecycle.
- Flexible / Adaptable: Continuously learning and working on things that they haven't worked on before.
- Self-organizing: Empowered to decide how they will do the work of the team.

#### Stakeholders

- Others interested in the success of the project.
- Internal: Company managers, executives, other scrum teams.
- External: Customers, partners, investors.

#### Product Owner

- Responsible for:
  - Communicating the product vision.
  - Maximizing the value of each increment.
  - The product backlog.
- Interacts with, represents and is accountable to stakeholders.
- Is often a member of the product management organization, in addition to being on the scrum team.

#### Scrum Master

- Responsibilities include:
  - Promoting and supporting scrum.
  - Improving the day-to-day effectiveness of the team.
  - Protecting the focus of the team.
  - Increasing the transparency of the project.
- Typical tasks include:
  - Coaching the scrum team and stakeholders on scrum.
  - Removing blocking issues.
  - Facilitating scrum events. Configuring scrum artifacts.
  - Monitoring sprint progress.

#### Product Owner vs Scrum Masters

- Product Owner is primarily responsible for the product value.
- Scrum Master is primarily responsible for team effectiveness.
- Why separate roles?
  - Divide & conquer.
  - Checks and balances.

#### Development Team

- Cross-functional, adaptive team that does the work of the project.
- Responsibilities include:
  - Estimating issues.
  - Deciding how much work can be done in a sprint.
  - Deciding how to organize and do the work of the sprint.
  - Creating the increment of each sprint.
  - Ability to modify the sprint backlog during the sprint.
- The Scrum Guide recommends three to nine members of the development team.

### Scrum Events

- The sprint itself.
- Sprint planning meeting.
- Daily standups / daily scrums.
- Sprint review.
- Sprint retrospective.
- There are characteristics that apply to all scrum meetings.
  - Fixed maximum time limit, no minimum time limit.
  - Once the objective of the meeting is achieved, the meeting is ended.
  - Meetings are primarily to plan, inspect and adapt.
  - Primarily about collaborating, not updating status.
  - Primarily spend time on things of value to all participants.

#### Sprint Planning Meeting

- **Attendees**: Entire scrum team.
- **Duration**: Typically four hours for a two week sprint.
- **Purpose**: To plan the work of the sprint.
- **Output**: Sprint goal, spring backlog.
- At the beginning the product owner usually proposes a sprint goal, as well as a set of proposed issues to be worked on during the sprint.
- The output of the meeting is a refined and agreed upon sprint goal and sprint backlog.

#### Daily Standup

- Occur every day, and generally attendees stand because ot is a short meeting.
- **Attendees**: Development team and scrum master (primarily).
- **Duration**: Typically 15 minutes.
- **Purpose**:
  - Inspect recent progress towards the sprint goal.
  - Plan the day's work.
  - Identify and impediments, and plans to resolve them.
- **Output**: Plan for the day.

#### Sprint Review

- Occurs near the end of the sprint.
- **Attendees**: Scrum team & stakeholders.
- **Duration**: Typically two hours for a two week sprint.
- **Purpose**: Inspect the increment and collaboratively update the product backlog.
- **Output**: First-pass at next sprint backlog.

#### Sprint Retrospective

- The final event of the sprint.
- **Attendees**: Scrum team, usually facilitated by the scrum master.
- **Duration**: Typically 90 minutes for a two week sprint.
- **Purpose**: The team inspects itself, including its processes, tools and team interaction.
- It's meant to be a supportive, blameless meeting, and often takes on characteristics of a celebration.
- **Output**: Improvement issue(s) added to next sprint's backlog.

#### Kanban vs Scrum

- Kanban has a continuous flow of issues, and issues are continuously prioritized and added to the backlog.
- In scrum each sprint has a set of issues that is similar to a Kanban backlog, but also the time-boxed structure of events around scrum.
- Scrum is a heavier framework as it includes more process around the planning meetings.
- Kanban in general leaves how to do the planning up to each team.

### Takeaways

- Scrum roles include:
  - Product Owner.
  - Scrum Master.
  - Development team members.
  - Stakeholders.
- Scrum meetings include:
  - Sprint planning meeting.
  - Daily standups.
  - Sprint review.
  - Sprint retrospective.

## Quick and Basic Search

### Searching Overview

#### Viewing a Project's Progress

- In Jira there are many ways to view a project's progress.
  - Boards.
  - Search.
  - Reports.
  - Dashboards.

#### Searching

- There are a few ways ti search in Jira.

  1. **Quick search**: Text search of issues, boards and projects.
  2. **Basic search**: Uses user interface elements to search for issues.
  3. **Advanced search (JQL)**: Uses a text-based search called JQL to search for issues.
  4. **Filters**: Convenient saved searching of issues.
  5. **Quick filters**: Limit the issues that are visible on a board.

- Searching is important because you can adapt your Jira experience to your team's desired process.
- A good search is usually going on behind the scenes of a specific view of your project.

### Quick Search

- Quick search is a global search which can search for issues as well as other things such as projects.
- When you start type a search term, you will see only items that match that search.
- Can use a capitalized NOT to exclude a term.
- Can also use a capitalized OR to search for issues with one search term or another.

### Basic Search

- Done with a row of user interface elements.
- Can limit the search.
- Also includes a text box so you can search the fields of issues for certain values.

### Takeaways

- Quick search can search the text of issues, board names, project names and filter names.
- Basic search is a user-friendly way to search for issues.

## JQL

### JQL Overview

- Basic search uses user interface elements to make searching for issues easy.
- Advanced search uses text to search for issues. This text is called JQL (Jira Query Language).
- JQL can do two things:
  1. Search for issues.
  2. Order results.

#### Basic vs Advanced Search

- Basic search:
  - User-friendly interface.
  - Queries can be complex.
- Advanced search:
  - Uses JQL.
  - Most powerful search method.
  - JQL can be uses in automation scripts.

#### Parts of JQL Query

- There are two main parts to a JQL query, and both are optional.
- The first is the search clause, which selects a subset of issues in the Jira instance.
- The second part is the order by clause, which orders the results.
- e.g. project = PROJ order be created DESC
- The simplest JQL query is not search by clause and no order by clause, showing all issues.

### Autocomplete

- When in advanced search writing a JQL query, Jira will help you to write the query.
- A list of available queries can be found [here](https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-fields/).
- A JQL search clause has a `<field name> <operator> <value>` structure e.g. `project = projectA`
- Boolean operators AND, OR & NOT are available for use.
  - e.g. `assignee = currentUser() AND status = "In Progress"`
  - e.g. `status = "Selected for Development" OR status = "In Progress"`
  - Another way to write this query is with the `in` operator: `status in ("Selected for Development", "In Progress")`

### Functions

- Instead of a hardcoded field value as im `<field name> <operator> <field value>` e.g. `project = projectA`.
- You can use a built-in function such as `<field name> <operator> <function>` e.g. `assignee = currentUser()`
- Learn more about functions [here](https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-functions/).

#### Time-based functions

- startOfDay()
- startOfWeek()
- startOfMonth()
- startOfYear()
- endOfDay()
- endOfWeek()
- endOfMonth()
- endOfYear()
- now()
- currentLogin()
- lastLogin()

#### Time Unit Qualifier

- Can be used to specify specific time units.
- `(+|-)nn(y|M|w|d|h|m)`
  - e.g. created in the last 2 days (48 hours): `created > -2d`
  - e.g. created since the start of the day 2 days ago: `created > startOfDay(-2d)`

### Takeaways

- A JQL query is behind all basic and advanced searches.
- Leverage basic queries and autocomplete to simplify creating JQL queries.
- JQL queries may select subsets of issues and/or order the query results.
- Functions can be used to avoid hard-coding values in a search clause.
- Time unit qualifiers can be used with date-related values.

## Filters

- Filters are saved searches to allow you to quickly execute a search.
- Can create yor own filter by executing a search, and clicking save as.
- Filters can be private or they can be shared. By default they are private.
- A quick filter is a way to filter the issues displayed on the board.
- Quick filters can be used to refine reports.

### Takeaways

- Filters are saved searches that can be exposed through user interface elements.
- Quick filters are saved searches that re used to further limit the issues displayed on the board or in reports.

## Epics

### Epics Overview

<!-- prettier-ignore -->
| Jira's work hierarchy            |
| :--------:|:--------:| :--------:|
|           | Epic     |           |
| Story     | Task     | Bug       |
|           | Subtask  |           |

- An epic is unique in that it can contain other issue types such as stories, tasks and bugs.
- Represents a large issue.
- Child issues can span multiple iterations, projects, teams & boards.
- Can be a single issue that represents a placeholder for many stories.
- As the team gets closer to working on the epic, they can add the child issues to fill in the details.

#### Why Epics?

- Organization of work.
- Span multiple iterations and projects.
- Simplifies the backlog (one issue).

### Working with Epics

- To create an epic, you can create an issue with a type of epic.
- When adding issues to an epic, you can use the epic link field to select a parent epic.
- Can also use the epic link field to add an existing issue to an epic.

### Epics & Scrum

- Can create epics from the backlog section of the scrum project.
- Can view the epic panel in the backlog, as a handy way to view the current progress of the epic.
- An epic report shows the details of the epic.
- If the epic spans multiple sprints, the epic burndown chart shoes progress for each sprint.

### Takeaways

- An epic is a large issue type "epic" that may contain other issues.
- The "epic link" field s used to associate issues with an epic.
- Epics can be shown on boards or in backlogs.

## Dashboards

- A way to visualize work.
- A configurable view of the work of one or more of the projects.
- Can be personal or shared.
- Composed of gadgets.
- Gadgets fall into one of several categories.
  - Work of Jira issues.
  - Charts.
  - Gadgets that are optimized for wallboards.
  - Other gadgets.
- Add more gadgets to dashboards through the Atlassian marketplace.

#### Wallboards

- Once you've created a dashboard, you can select view as wallboard, which can be shown on a TV in a room.
- Acts as an information radiator, improving the team's shared understanding of the projects.

### Takeaways

- Dashboards display the work of projects.
- Dashboards can be shared or used personally.
- Gadgets display a portion of a dashboard.
- Dashboards can be shown as a wallboard to display information.

## Putting It All Together

### Quick Course Review

- It is important that you, your team and your entire organization embody [the combined lean and agile principles](#combined-lean-and-agile-principles) in order to be effective.
- Having these principles, you can choose an agile methodology or framework, as well as the tools to help you implement these principles.
- We saw that an agile team is continuously changing and improving, and you want to know Jira well enough to configure it to match your team's process.
- Jira is designed to be configurable for this very purpose.
  - Choose project template.
  - Add or remove board columns.
  - Assign WIP limits.
  - Create swimlanes.
  - Create and reuse JQL queries.
  - Create and uze quick filters.
  - Modify board card layout.
  - Create issue types.
  - Create custom fields.
  - Customize reports.

### Jira Family

- Jira software is unique un that it has the Jira scrum and kanban projects, and also integration with version control and build systems.
- Jira Core is a subset of Jira software, and is used for business applications such as onboarding employees.
- Jira Service Desk is service desk software for IT teams, and is used to manage customer requests.
