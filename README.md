# chp-validate

`chp-validate` is a TypeScript-based validation and formatting library. It includes functions to validate email addresses, fax numbers, Thai National IDs, and Thai phone numbers, as well as utilities for formatting numbers and phone numbers.

## Installation

Install the library using npm:

```bash
npm install @chp/validate
```

## Usage

### Email Validation

```typescript
import { isValidEmail } from "@chp/validate";

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
```

### Fax Number Validation

```typescript
import { isValidFaxNumber } from "@chp/validate";

console.log(isValidFaxNumber("02-123-4567")); // true
console.log(isValidFaxNumber("02-123-456")); // false
```

### Thai National ID Validation

```typescript
import { isValidThaiNationalID } from "@chp/validate";

console.log(isValidThaiNationalID("1212121212121")); // true
console.log(isValidThaiNationalID("1234567890123")); // false
```

### Thai Phone Number Validation

```typescript
import { isValidThaiPhoneNumber } from "@chp/validate";

console.log(isValidThaiPhoneNumber("0812345678")); // true
console.log(isValidThaiPhoneNumber("081234567")); // false
```

### Number Formatting

```typescript
import { formatNumber } from "@chp/validate";

console.log(formatNumber(1234567)); // "1,234,567"
```

### Phone Number Formatting

```typescript
import { formatPhoneNumber } from "@chp/validate";

console.log(formatPhoneNumber("0812345678")); // "081-234-5678"
```

## Testing

Run the tests using npm:

```bash
npm test
```

## License

This library is licensed under the MIT License.
