<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Jira and Confluence Together</h1>
<p>Jira and Confluence Together from Atlassian University certified training. [Course link](https://training.atlassian.com/jira-confluence-together).</p>
</div>

## Index of topics

1. [Course Overview](#course-overview)

2. [Why Integrate Jira and Confluence](#why-integrate-jira-and-confluence)

3. [Linking Issues and Page](#linking-issues-and-pages)

4. [Creating Issues Using Confluence](#creating-issues-using-confluence)

5. [Product Requirements Blueprint](#product-requirements-blueprint)

6. [Reporting Jira Information in Confluence](#reporting-jira-information-in-confluence)

## Course Overview

- Identify the value of using Jira and Confluence together.
- Integrate Jira information in Confluence Spaces.
- Integrate Confluence information in Jira projects.

### What is Jira Use For?

- To help manage the work of a team project, broken down into issues.
  - Add, prioritize, update, communicate and report on issues.
- Visualizes the work of the project using project boards, reports and dashboards.

### What is Confluence Used For?

- A team content, communication and collaboration platform.
  - Effectively a versioned team website and social media platform.
- Teams plan, discuss, document and broadcast the work of the project in standardized ways.

#### Example uses of Confluence

- **Project content creation and sharing**
  - Requirements.
  - Documentation.
  - Specifications.
  - Knowledge base.
- **Status**
  - Roadmaps.
  - Schedules.
  - Project status.
- **Collaboration**
  - Meeting notes.
  - Blogs.
  - Comments.
  - Idea discussions.
  - Decisions.
  - Retrospectives.

## Why Integrate Jira and Confluence

- Single source of project knowledge: Increase productivity by avoiding overlapping, scattered and out-of-sync information.
- Improve the team's shared understanding of the project: Provide information to team members from the application they use.
- Maintain traceability: Organized, complete history of project work, conversations, discussions etc.

- Agile projects involve continuous change and planning - integration enables the project information to be _living_.

- Teams can use the strengths of Confluence for knowledge management, and the strengths of Jira for work management.

### Administration Overview

- In Confluence you have a number of pages, which are organized into spaces.
- In Jira you have a number of issues, which are organized into projects.

#### Jira & Confluence Administration Tasks

- Connect Jira & Confluence instances (Jira & Confluence admins).
- Create Confluence spaces (Confluence admin).
- Assign Confluence space administrators (Confluence admin).
- Create Jira projects (usually Jira admin).
- Assign project administrators and leads (usually Jira admin).
- Create a link between a Confluence space and Jira project (Jira or Confluence admin).

### Notes

- Every agile team is unique and always changing. There often is no "right way" to use the applications.
- Use the Jira and Confluence tools to reflect your team's current processes, not dictate them.

### Takeaways

- Issue management (Jira) and content creation and collaboration (Confluence) are essential to most projects.
- Integrate Jira and Confluence to inform and involve the entire team from a single source of truth.
- Integrating Jira and Confluence improves shared understanding, team satisfaction and productivity.

## Linking Issues and Pages

### Add links to Pages in Issues.

- In the details of a Jira issue you can link to a Confluence page.
- This is an easy way to reference information to the Jira issue.
- Can navigate directly to the Confluence page.
- Changes to the pages location or title are automatically reflected.

### Add links to Issues on Pages

- On Confluence pages you can add links to related Jira issues.
- Creates a convenient link to the issue.
- Automatically provides the current status of the issue (a living document).
- Automatically adds a link to the page in the issue links section of the Jira issue.
- To link to a Jira issue on a Confluence page, you can use the Jira Issue/Filter Macro.
  - Edit a Confluence page.
  - +(insert more content).
  - Jira Issue/Filter Macro.
  - Search for the issue: use any issue key, search URL, Jira link, JQL, plain text or filter.
  - Configure display options.
  - Click insert.
- Another option apart from using the Jira Issue/Filter Macro is to paste the URL of a Jira issue on the Confluence page.
  - This triggers the auto-convert feature in Confluence, so the link on the page looks the same as if using the Jira Issue/Filter Macro.

### Takeaways

- Jira and Confluence have out-of-the-box linking capabilities.
- Changes to linked pages or issues are automatically reflected in the links.
- In Jira, use the link feature of Jira issues to link to Confluence pages.
- In Confluence, use the Jira Issue/Filter Macro or auto-convert feature to link to Jira issues.

## Creating Issues Using Confluence

- You can use the Jira Issue/Filter Macro to create Jira issues and insert the link on a Confluence page.
- Create a Jira issue when editing a Confluence page.
- Results in an issue in Jira with a link on the Confluence page.
- Why?
  - The user would prefer to use Confluence.
  - The issue metadata (for example summary) already exists in Confluence.
  - A list of issues already exists on a Confluence page and the user wishes to add to the list.

### Create Single Issues with Confluence

- (Optional) in edit mode select some text on the page.
- Use the Insert Jira Issue/Filter Macro.
- Select Create New Issue.
- Enter project, issue type etc. (if you select text to start it is used as the issue summary).
- Click Insert.

### Create Multiple Issues with Confluence

- When in view mode of a Confluence page (not edit) you can create a Jira issue by selecting text and clicking the Jira icon.
- (Optional) create multiple issues at once by selecting text in a table.
- Results in issue(s) in Jira with a link on the Confluence page.
- Why?
  - An alternative to creating issues in edit mode.
  - Create multiple issues at once if from a table.
- Who?
  - Any team member who can edit pages (this results in an automatic page edit and publish) and can create issues.
- How?
  - Add text (optionally in a table).
  - Publish the page.
  - Highlight text.
  - Select the Create Jira Issue icon.
  - Enter the issue metadata.
  - Click Create.
  - The issue is created in Jira with a link added to the page (no editing or publishing required).
  - To create multiple issues from a table, highlight a single summary.
  - Click the Jira icon.
  - Because the text is in a table, Confluence adds the Create multiple issues from table link.
  - Issues will be created with a summary corresponding to the text in the summary column.
  - If there is a link to en epic on the page , Confluence will provide the option to link created issues to that epic.
  - Click Create.

### Insert a Dynamic List of Issues on a Confluence Page.

- You can use the Jira Issue/Filter Macro to display a table of issues on a Confluence page.
- Use JQL to search for issues of an epic.
- Use display options to define the columns of the table.
- **Pro tip**: Execute the JQL queries in Jira first, and then when you know they are working, copy and paste them in Confluence, because the JQL queries are better in Jira.

### Takeaways

- You can use the Jira Issue/Filter Macro in Confluence to create Jira issues.
- You can create multiple Jira issues from a Confluence table.
- Use the Jira Issue/Filter Macro to insert a dynamic list of issues on a Confluence page.

## Product Requirements Blueprint

## Reporting Jira Information in Confluence
