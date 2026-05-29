# Accounts API

Version: 1.2.0

Customer account service for CRM and partner integrations.

## Base URL

`http://localhost:3000`

## Accounts

### List all accounts

**GET** `/accounts`

Returns a list of customer accounts.

**200 Account list**

```json
{
  "count": 2,
  "data": [
    {
      "id": "ACC-1001",
      "name": "Northwind Traders",
      "industry": "Retail",
      "status": "active",
      "tier": "premium"
    },
    {
      "id": "ACC-1002",
      "name": "Contoso Manufacturing",
      "industry": "Manufacturing",
      "status": "inactive",
      "tier": "standard"
    }
  ]
}
```

Response items use the `Account` schema:
- `id` string
- `name` string
- `industry` string
- `status` enum: `active`, `inactive`
- `tier` enum: `standard`, `premium`, `enterprise`

### Create account

**POST** `/accounts`

Creates a customer account.

Request body uses the `AccountInput` schema:
- `id` string
- `name` string
- `industry` string
- `status` enum: `active`, `inactive` (default: `active`)
- `tier` enum: `standard`, `premium`, `enterprise`

Example request:

```json
{
  "id": "ACC-2001",
  "name": "Example Corp",
  "industry": "Financial Services",
  "status": "active",
  "tier": "premium"
}
```

**201 Created**

```json
{
  "id": "ACC-2001",
  "name": "Example Corp",
  "industry": "Financial Services",
  "status": "active",
  "tier": "premium"
}
```

### Get account by ID

**GET** `/accounts/{id}`

Gets one account by ID.

Path parameter:
- `id` string, required, example: `ACC-1001`

**200 Account found**

```json
{
  "id": "ACC-1001",
  "name": "Northwind Traders",
  "industry": "Retail",
  "status": "active",
  "tier": "premium"
}
```

### Update account subscription tier

**PATCH** `/accounts/{id}/tier`

Changes the subscription tier for an existing customer account.
Used when billing upgrades a plan or success downgrades after churn review.

Business rules:
- `tier` must be one of: `standard`, `premium`, `enterprise`
- Account must already exist

Path parameter:
- `id` string, required, example: `ACC-1001`

Request body uses the `TierUpdate` schema:
- `tier` enum: `standard`, `premium`, `enterprise`

Example request:

```json
{
  "tier": "premium"
}
```

**200 Tier updated; returns full account**

```json
{
  "id": "ACC-1001",
  "name": "Northwind Traders",
  "industry": "Retail",
  "status": "active",
  "tier": "premium"
}
```
