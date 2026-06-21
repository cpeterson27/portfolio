# Notion Builder OS — Assembly Guide

Estimated setup time: 35–50 minutes.

## 1. Create the main page

In Notion, create a new page named **Notion Builder OS**.

Add this page description:

> A focused operating system for capturing product signals, making clearer decisions, shipping one useful milestone at a time, and saving what you learn.

Choose a simple icon such as a compass, layered squares, or rocket. Keep the page full width.

## 2. Import the databases

Import each CSV as a new Notion database in this order:

1. `imports/01-products.csv`
2. `imports/02-ideas.csv`
3. `imports/03-decisions.csv`
4. `imports/04-experiments.csv`
5. `imports/05-weekly-shipping.csv`
6. `imports/06-proof-library.csv`

After each import, rename the database to remove the numeric filename prefix.

## 3. Set property types

### Products

| Property | Type |
|---|---|
| Product | Title |
| Status | Select |
| Stage | Select |
| Audience | Text |
| Core Problem | Text |
| Promise | Text |
| Current Milestone | Text |
| Next Decision | Text |
| Weekly Priority | Text |
| Blocker | Text |
| Target Launch | Date |
| Last Reviewed | Date |

Status options: Active, Paused, Launched, Archived.

Stage options: Idea, Validate, Build, Launch, Improve.

### Ideas

| Property | Type |
|---|---|
| Idea | Title |
| Product Key | Text initially; relation later |
| Status | Select |
| Type | Select |
| Audience | Text |
| Problem or Signal | Text |
| Evidence | Text |
| Expected Value | Number |
| Confidence | Number |
| Effort | Number |
| Priority Score | Formula |
| Next Action | Text |
| Review Date | Date |
| Notes | Text |

Status options: Inbox, Review, Test, Build, Deferred, Archived.

Type options: Feature, Product, Content, Growth, Workflow, Research.

Use this formula for **Priority Score**:

```notion
round((prop("Expected Value") * prop("Confidence")) / max(prop("Effort"), 1) * 10) / 10
```

### Decisions

| Property | Type |
|---|---|
| Decision | Title |
| Product Key | Text initially; relation later |
| Status | Select |
| Decision Date | Date |
| Context | Text |
| Options Considered | Text |
| Chosen Direction | Text |
| Why | Text |
| Tradeoff | Text |
| Evidence Needed Next | Text |
| Revisit Date | Date |

Status options: Proposed, Decided, Revisit, Reversed.

### Experiments

| Property | Type |
|---|---|
| Experiment | Title |
| Product Key | Text initially; relation later |
| Status | Select |
| Assumption | Text |
| Smallest Test | Text |
| Success Signal | Text |
| Result | Text |
| Learning | Text |
| Follow-up | Text |
| Start Date | Date |
| Review Date | Date |

Status options: Planned, Running, Passed, Failed, Inconclusive.

### Weekly Shipping

| Property | Type |
|---|---|
| Week | Title |
| Product Key | Text initially; relation later |
| Status | Select |
| Milestone | Text |
| Outcome 1 | Text |
| Outcome 2 | Text |
| Outcome 3 | Text |
| Smallest Ship | Text |
| Blockers | Text |
| Decision Needed | Text |
| Friday Review | Text |
| Week Starts | Date |

Status options: Planned, Active, Complete, Rolled Over.

### Proof Library

| Property | Type |
|---|---|
| Proof | Title |
| Product Key | Text initially; relation later |
| Type | Select |
| Source | Text |
| Quote or Result | Text |
| Why It Matters | Text |
| Permission | Select |
| Asset URL | URL |
| Captured Date | Date |
| Use Next | Text |

Type options: Customer Quote, Result, Screenshot, Metric, Support Question, Case Study Note.

Permission options: Approved, Ask First, Private, Not Needed.

## 4. Create relations

For each database except Products:

1. Add a Relation property named **Product**.
2. Relate it to the Products database.
3. Connect each included example to **Notion Builder OS**.
4. Keep `Product Key` until all records are connected.
5. Hide or delete `Product Key` after verifying the relation.

This gives every idea, decision, experiment, shipping week, and proof record a shared product context.

## 5. Add useful views

### Products

- **Command Center** — gallery or list filtered to Status = Active
- **Launch Calendar** — calendar by Target Launch
- **All Products** — table grouped by Stage

### Ideas

- **Inbox** — Status = Inbox
- **Review Queue** — Status = Review, sorted by Priority Score descending
- **Testing** — board grouped by Status, filtered to Test
- **Roadmap** — board grouped by Status
- **Deferred** — Status = Deferred

### Decisions

- **Recent Decisions** — sorted by Decision Date descending
- **Needs Decision** — Status = Proposed
- **Revisit Soon** — Status = Revisit, sorted by Revisit Date

### Experiments

- **Active Tests** — Status = Running
- **Planned** — Status = Planned
- **Learning Archive** — Passed, Failed, or Inconclusive
- **Review Calendar** — calendar by Review Date

### Weekly Shipping

- **This Week** — Status = Active
- **Upcoming** — Status = Planned
- **Shipping History** — Status = Complete, sorted by Week Starts descending

### Proof Library

- **Proof Inbox** — grouped by Type
- **Approved for Marketing** — Permission = Approved or Not Needed
- **Customer Language** — Type = Customer Quote or Support Question
- **Case Study Material** — Type = Result, Metric, Screenshot, or Case Study Note

## 6. Build the dashboard

Use the layout in `DASHBOARD-BLUEPRINT.md`. Create linked database views rather than moving the source databases into the dashboard.

## 7. Add database page templates

Copy the content from `page-templates/` into matching Notion database templates:

- Product brief
- Idea review
- Decision memo
- Experiment brief
- Weekly shipping plan
- Launch room
- Proof capture

## 8. Prepare the customer version

Before publishing:

1. Keep one complete example product.
2. Keep at least two example records in every database.
3. Add a **Start Here** page using `customer-files/QUICK-START.md`.
4. Add a **Clean Start** product page with blank linked views.
5. Confirm customers cannot edit your original workspace.
6. Publish the page and enable **Duplicate as template**.
7. Test duplication in a separate Notion account or private browser.

## 9. Definition of done

The template is ready to sell when:

- A new user can duplicate it.
- The dashboard opens without broken views.
- All database templates are available.
- Relations work in the duplicated copy.
- Example records explain the workflow without outside help.
- The clean-start path takes less than ten minutes.
- The customer knows what to do first.
