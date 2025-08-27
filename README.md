# Employee-Leave-Management-SOLVD

## Table of Contents

* [Overview](#overview)
* [Leave Policy](#Leave-Policy)

## Overview

This project is designed to manage employees leave. When an employee requests vacation days, the system calculates the number of days available and the corresponding payout, if applicable.


## Still deciding if Leave policy should be moved to another readme, removed or shortened

## Leave Policy

The leave management system is governed by configurable policies that define how different types of leave are accrued, carried over, approved, and paid out.

### Leave Types

* **VACATION**

  * Accrual: Monthly (1.67 days per month ≈ 20 days/year)
  * Carryover: Maximum 10 days; expire by 31-Mar-2025
  * Negative Balance: Not allowed
  * Payout: Eligible (Triggers: Termination, Annual, Above Cap)
  * Approval: Required

* **SICK**

  * Accrual: Upfront (5 days per year)
  * Carryover: None
  * Negative Balance: Allowed (unpaid after exhausting balance)
  * Payout: Not eligible
  * Approval: Not required (auto-approved)

* **UNPAID**

  * Accrual: None
  * Carryover: None
  * Negative Balance: Not allowed
  * Payout: Not eligible
  * Approval: Required

### Work Calendar

* Weekdays only (Mon–Fri)
* Holidays excluded per location:

  * Argentina (AR): 2025-01-01, 2025-05-01, 2025-12-25
  * United States (US): 2025-07-04, 2025-12-25
* Half-days allowed

### Accrual Rules

* Pro-rate on hire date
* Pro-rate based on FTE (part-time adjustments)
* Allow accrual adjustments if FTE changes mid-period

### Payout Rules

* Daily rate method: Annual salary ÷ 12 ÷ 21.75 working days

### Timezone

* Timezone is stored per employee to ensure accurate date calculations across global teams.
